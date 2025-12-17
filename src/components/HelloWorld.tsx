interface Props {
    name: string;
    age?: number;
    lastName?: string;
}

const HelloWorld = ({ name }: Props) => {
    return <div>Hello - {name}</div>;
};

export default HelloWorld;
