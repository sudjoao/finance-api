import { Request, Response } from "express";
import { UserService } from "../../application/services/userService";
import { serializeUser } from "../../domain/entities/User";

export class UserController {
    constructor(private userService: UserService){}

    async createUser(req: Request, res: Response) : Promise<void> {
        const user = req.body;
        try {
            const createdUser = await this.userService.createUser(user);
            res.status(201).json(serializeUser(createdUser));
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getUser(req: Request, res: Response) : Promise<void> {
        const userId = req.params.id;
        try {
            const user = await this.userService.getUserById(parseInt(userId));
            if (user){
                res.status(200).json(serializeUser(user));
            } else {
                res.status(404).json({error: "User not found"})
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async login(req: Request, res: Response) : Promise<void> {
        const { email, password } = req.body;
        try {
            const user = await this.userService.login(email, password);
            res.status(200).json(serializeUser(user));
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}