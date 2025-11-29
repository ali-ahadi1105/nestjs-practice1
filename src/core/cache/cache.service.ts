import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import type { Cache } from "cache-manager";

@Injectable()
export class CacheService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: Cache
    ) {}

    async set(key: string, value: any, ttl?: number): Promise<void> {
        await this.cache.set(key, value, ttl);
    }

    async get<T>(key: string): Promise<T | undefined> {
        const value = await this.cache.get<T>(key);
        return value ?? undefined;
    }

    async del(key: string): Promise<void> {
        await this.cache.del(key);
    }

    async reset(): Promise<void> {
        await this.cache.clear();
    }

    async onModuleDestroy() {
        const store = (this.cache as any).store;
        if (store?.client) {
            await store.client.quit();
        }
    }
}