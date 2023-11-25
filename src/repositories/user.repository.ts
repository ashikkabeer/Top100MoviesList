import User from "../models/userModel";
import { Op } from "sequelize";
interface IUserRepository {
    save(user: User): Promise<User>
    retrieveAll(searchParams: { name: string }): Promise<User[]>
    retrieveById(userId: number): Promise<User | null>;
    update(user: User): Promise<number>
    delete(userId: number): Promise<number>
    deleteAll(): Promise<number>;
}


class UserRepository implements IUserRepository {
    async save(user: User): Promise<User> {
        try {
            return await User.create({
                name: user.name, // Fix: Add the 'name' property to the User model
                bio: user.bio,
                gender: user.gender
            });
        } catch (error) {
            throw new Error("failed to create the user");
        }
    }

    async retrieveAll(searchParams: { name?: string }): Promise<User[]> {
        try {
            // let condition: SearchCondition = {};
            let condition: { name?: { [Op.like]: string } } = {};

            if (searchParams?.name) {
                condition.name = { [Op.like]: `%${searchParams.name}%` }
            }

            return await User.findAll({ where: condition });
        } catch (error) {
            throw new Error("Failed to retrieve all users!")
        }
    }

    async retrieveById(userId: number): Promise<User | null> {
        try {
            return await User.findByPk(userId);
        } catch (error) {
            throw new Error("Failed to retirieve user")
        }
    }

    async update(user: User): Promise<number> {
        const { id, name, bio, gender } = user;

        try {
            const affectedRows = await User.update(
                { name, bio, gender },
                { where: { id: id } }
            );

            return affectedRows[0];
        } catch (error) {
            throw new Error("Failed to update tutorial!")
        }
    }

    async delete(userId: number): Promise<number> {
        try {
            const affectedRows = await User.destroy({ where: { id: userId } });

            return affectedRows;
        } catch (error) {
            throw new Error("Failed to delete User!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            return User.destroy({
                where: {},
                truncate: false
            });
        } catch (error) {
            throw new Error("Failed to delete Users!");
        }
    }
}
export default new UserRepository();
