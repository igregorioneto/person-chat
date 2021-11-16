import { User } from '../entities/User';
import { UserInterface } from '../interfaces/User';

class UserRepository {
    public async createUser(data: UserInterface): Promise<UserInterface> {
        const user = new User(data);
        return await user.save();
    }
}

export default new UserRepository();