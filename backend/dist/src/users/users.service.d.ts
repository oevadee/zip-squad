import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getOneUser(getOneUserInput: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
