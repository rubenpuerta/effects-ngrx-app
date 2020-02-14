import { usersEffects } from "@effects/users.effects";
import { userEffects } from "@effects/user.effects";

export const globalStateEffects: any[] = [usersEffects, userEffects];
