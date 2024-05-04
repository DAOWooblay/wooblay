export default function DNameInput({ daoName, setDaoName }: { daoName: string, setDaoName: (name: string) => void }) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDaoName(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            value={daoName}
            onChange={handleInputChange}
        />
    );
}
