import { Routes } from "constants/models/Routes";

export const ROUTES: Routes = {
  ROOT: "/",
  HOME_PAGE: "/home",
  GETTING_STARTED: "/getting_started",
  SEASON_PAGE: "/season",
  SIGN_UP_PAGE: "/signup",
  VERIFICATION_PAGE: "/verify"
};

export const ADMIN_ROUTES: string[] = [ROUTES.SEASON_PAGE];
export const USER_ROUTES: string[] = [ROUTES.HOME_PAGE, ROUTES.GETTING_STARTED];
export const CONTAINER_ROUTES: string[] = [ROUTES.SEASON_PAGE, ROUTES.HOME_PAGE];
