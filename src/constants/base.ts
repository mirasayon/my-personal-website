export const MY_BIRTH_DATE = new Date("2005-08-02");
export const MY_AGE_NOW = (() => {
    const now = new Date();
    const years = now.getFullYear() - MY_BIRTH_DATE.getFullYear();
    const my_age =
        years -
        (now.getMonth() < MY_BIRTH_DATE.getMonth() ||
        (now.getMonth() === MY_BIRTH_DATE.getMonth() &&
            now.getDate() < MY_BIRTH_DATE.getDate())
            ? 1
            : 0);
    return my_age;
})();

export const BASE_URL = "mirasayon.com" as const;
export const FULL_URL = "https://mirasayon.com" as const;
