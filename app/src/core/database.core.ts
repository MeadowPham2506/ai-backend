import { PrismaClient } from '@src/generated/prisma';
import logger from '@src/core/logger.core';

class Database {
  private static prisma: PrismaClient;

  static connectPrisma(): PrismaClient {
    if (!this.prisma) {
      logger.info('Connecting to PostgreSQL via Prisma...');
      this.prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
      });
      logger.success('Connected to PostgreSQL (Prisma).');
    }
    return this.prisma;
  }

  static getClient(): PrismaClient {
    if (!this.prisma) {
      return this.connectPrisma();
    }
    return this.prisma;
  }

  static async disconnect(): Promise<void> {
    if (this.prisma) {
      await this.prisma.$disconnect();
      logger.info('Disconnected from PostgreSQL (Prisma).');
    }
  }
}

export default Database;