export default async function Student({ params }: {
    params: Promise<{ studentid: string }>;
}) {
    const { studentid } = await params;
    return (
        <div>
            สวัสดี รหัสนักเรียนผมคือ, {studentid}
        </div>
    )
}