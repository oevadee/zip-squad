import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserUsernameInput } from './dto/update-user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    getOneUser(userId: number): Promise<User>;
    getAllUsers(): Promise<User[]>;
    createUser(createUserInput: CreateUserInput): Promise<User>;
    updateUser(updateUserInput: UpdateUserUsernameInput, userId: number): Promise<User>;
}
