export default async function Hello({ params }: {
    params: Promise<{
        name: string,
        age: string
    }>;
}) {
    const { name, age } = await params;
    return (
        <div>
            สวัสดีครับผมชื่อ, {name} ผมอายุ {age} ปี
        </div>
    )
}