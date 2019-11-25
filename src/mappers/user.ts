import { Player } from "models/Player";
import { User } from "models/User";

export const toPlayer = (details: User): Player => ({
  id: details.id,
  userName: details.userName,
  name: details.displayName,
  epithet: "",
  favoriteColors: [],
  email: details.email
});
