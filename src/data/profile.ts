export interface Profile {
    name: string;
    title: string;
    location: string;
    email: string;
    openToWork: boolean;
    avatar: string;
    github: string;
    linkedin: string;
}

export const profile: Profile = {
    name: "John Collins",
    title: "Software Engineer",
    location: "San Francisco, CA",
    email: "me@johncollins.dev",
    openToWork: true,
    avatar: "/avatar.webp",
    github: "https://github.com/johncollins-dev",
    linkedin: "www.linkedin.com/in/johncollins-dev"
};
