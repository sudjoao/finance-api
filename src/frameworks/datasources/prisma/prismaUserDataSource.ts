import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../../application/repositories/userRepository";
import { CreateUserDto, User } from "../../../domain/entities/User";


export class PrismaUserDataSource implements UserRepository {
    async create(user: CreateUserDto): Promise<User> {
        const prisma = new PrismaClient()
        try {
            const newUser = await prisma.user.create({
                data: {
                    email: user.email,
                    password: user.password
                }
            })
            await prisma.$disconnect();
            return newUser;
        } catch (error) {
            await prisma.$disconnect();
            throw error;
        }
    }

    async findById(id: number): Promise<User | null> {
        const prisma = new PrismaClient()
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id
                }
            })
            await prisma.$disconnect();
            return user;
        } catch (error) {
            await prisma.$disconnect();
            throw error;
        }
    }

    async findByEmail(email: string): Promise<User | null> {
        const prisma = new PrismaClient()
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            await prisma.$disconnect();
            return user;
        } catch (error) {
            await prisma.$disconnect();
            throw error;
        }
    }
}