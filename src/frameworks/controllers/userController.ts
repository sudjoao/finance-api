import { Request, Response } from "express";
import { UserService } from "../../application/services/userService";

export class UserController {
    constructor(private userService: UserService){}

    async getUser(req: Request, res: Response) : Promise<void> {
        const userId = req.params.id;
        try {
            const user = await this.userService.getUserById(parseInt(userId));
            if (user){
                res.status(200).json(user);
            } else {
                res.status(404).json({error: "User not found"})
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}