export interface Profile {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    description: string,
    avatarUrl: string | null,
    subscriptionsAmount: number,
    isActive: boolean,
    stack: string[],
    city: string,
}

export interface JsonplaceholderProfile {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: {
        city: string,
        street: string,
        suite: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
