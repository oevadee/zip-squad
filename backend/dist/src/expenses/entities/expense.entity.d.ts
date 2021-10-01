import { User } from 'src/users/user.entity';
export declare class Expense {
    id: string;
    value: number;
    description: string;
    creatorId: string;
    receiverId: string;
    user: User;
}
