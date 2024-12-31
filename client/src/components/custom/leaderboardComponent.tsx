import podium from "@/assets/podium/podium.png"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import points from "@/assets/points/points.png"
export function LeaderboardComponent() {
    const leaderboard = [
        {
            place: 1,
            username: "User1",
            rank: 1,
            points: 2500,
        },
        {
            place: 2,
            username: "User2",
            rank: 2,
            points: 2400,
        },
        {
            place: 3,
            username: "User3",
            rank: 3,
            points: 2300,
        },
        {
            place: 4,
            username: "User4",
            rank: 4,
            points: 2200,
        },
        {
            place: 5,
            username: "User5",
            rank: 5,
            points: 2100,
        },
        {
            place: 6,
            username: "User6",
            rank: 6,
            points: 2000,
        },
        {
            place: 7,
            username: "User7",
            rank: 7,
            points: 1900,
        },
    ]
    return (
        <div className="text-white px-5">
            <div className="flex justify-center text-xl">
                <div className="flex flex-col space-y-3">
                    <span className="text-green-600 text-2xl text-center">Leaderboard</span>
                    <span className="text-base text-center text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio enim ab veniam ipsa quos harum, accusamus accusantium hic, ipsum iusto blanditiis totam voluptate quas amet ipsam illo rerum. Ex!</span>
                </div>
            </div>
            <div className="flex items-center justify-center mt-20 mb-10">
                <svg width="403" height="230" viewBox="0 0 403 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.997345" y1="148.754" x2="128.001" y2="148.754" stroke="#817D7D" />
                    <line x1="276" y1="147.627" x2="402.003" y2="147.627" stroke="#817D7D" />
                    <line x1="0.997345" y1="148.754" x2="128.001" y2="148.754" stroke="#817D7D" />
                    <line x1="0.526277" y1="148.84" x2="26.5263" y2="71.84" stroke="#817D7D" />
                    <line y1="-0.5" x2="81.2711" y2="-0.5" transform="matrix(-0.319917 -0.947446 -0.947446 0.319917 402 148)" stroke="#817D7D" />
                    <line x1="0.526277" y1="148.84" x2="26.5263" y2="71.84" stroke="#817D7D" />
                    <line y1="-0.5" x2="81.2711" y2="-0.5" transform="matrix(-0.319917 -0.947446 -0.947446 0.319917 402 148)" stroke="#817D7D" />
                    <line x1="25.9994" y1="72.25" x2="124.003" y2="72.25" stroke="#6D6868" />
                    <line x1="280" y1="70.6894" x2="377.003" y2="70.6894" stroke="#817D7D" />
                    <line x1="123.499" y1="66.9732" x2="131.499" y2="215.973" stroke="#14D42A" />
                    <line y1="-0.5" x2="149.215" y2="-0.5" transform="matrix(-0.0536141 0.998562 0.998562 0.0536141 281 67)" stroke="#14D42A" />
                    <line x1="242.43" y1="0.745635" x2="281.43" y2="66.7456" stroke="#14D42A" />
                    <line x1="160.436" y1="1.2445" x2="123.436" y2="67.2445" stroke="#14D42A" />
                    <line x1="159.997" y1="1.25" x2="243.001" y2="1.25" stroke="#14D42A" />
                    <line x1="124" y1="66.5" x2="281" y2="66.5" stroke="#14D42A" />
                    <line x1="402.479" y1="147.144" x2="378.479" y2="227.144" stroke="#817D7D" />
                    <line y1="-0.5" x2="83.5225" y2="-0.5" transform="matrix(0.287348 0.957826 0.957826 -0.287348 2 149)" stroke="#817D7D" />
                </svg>
            </div>
            <Table className="border border-white/10 table-fixed">
                <TableHeader className="border-b border-white/10">
                    <TableRow className="hover:bg-inherit border border-white/10">
                        <TableHead className="border-r border-white/10 text-center">Place</TableHead>
                        <TableHead className="border-r border-white/10 text-center">Username</TableHead>
                        <TableHead className="border-r border-white/10 text-center">Rank</TableHead>
                        <TableHead className="text-center">Points</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leaderboard.map((entry) => (
                        <TableRow key={entry.place} className="hover:bg-inherit border border-white/10">
                            <TableCell className="font-medium border-r border-white/10 text-center">{entry.place}</TableCell>
                            <TableCell className="border-r border-white/10 text-center">{entry.username}</TableCell>
                            <TableCell className="border-r border-white/10 text-center">{entry.rank}</TableCell>
                            <TableCell className="text-center">
                                <div className="flex items-center justify-center space-x-3">
                                    <span>
                                        <img src={points} alt="points" width={30} height={30} />
                                    </span>
                                    <span>
                                        {entry.points}
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}