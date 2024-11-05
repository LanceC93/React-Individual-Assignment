import User from "./User";

type User = {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
};

interface UserProps {
    users: User[];
}
export default function Users(props: UserProps) {
    return (
        <div>
            {props.users.map((current, i) =>{
                return <User user={current} key={i}/>;
            })}
        </div>
    );
}