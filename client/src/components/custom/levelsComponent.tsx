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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import points from "@/assets/points/points.png"
import { Trophy, Plus } from 'lucide-react'
import banner from "@/assets/trophies/banner.png"
import { useState } from "react"

export function LevelsComponent() {
    const [open, setOpen] = useState(false)
    const [newLevel, setNewLevel] = useState({ level: "", points: "" }) // Initialize with empty fields
    const [levels, setLevels] = useState([]) // Hold all levels

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newLevel.level && newLevel.points) {
            setLevels([...levels, newLevel]) // Add new level to the array
            setNewLevel({ level: "", points: "" }) // Reset form inputs
            setOpen(false) // Close the dialog
        }
    }

    return (
        <div className="text-white px-5">
            <div className="h-24 rounded-2xl px-6 flex justify-between border border-white/20 items-center relative overflow-hidden">
                <div className="flex space-x-3 items-center h-full">
                    <img
                        src={banner}
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover opacity-5"
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <span><Trophy /></span>
                    <span className="">Levels</span>
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="border-white/20 hover:bg-white/10 z-50">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Level
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#101010] border border-white/20 text-white">
                        <DialogHeader>
                            <DialogTitle>Create New Level</DialogTitle>
                            <DialogDescription className="text-white/60">
                                Add a new level and its point requirement.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="level">Level Name</Label>
                                <Input
                                    id="level"
                                    placeholder="Enter level name"
                                    className="bg-transparent border-white/20"
                                    value={newLevel.level}
                                    onChange={(e) => setNewLevel({ ...newLevel, level: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="points">Points Required</Label>
                                <Input
                                    id="points"
                                    type="number"
                                    placeholder="Enter points required"
                                    className="bg-transparent border-white/20"
                                    value={newLevel.points}
                                    onChange={(e) => setNewLevel({ ...newLevel, points: e.target.value })}
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    type="button"
                                    className="border-white/20"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-white text-black hover:bg-white/90"
                                >
                                    Create
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <Table className="border border-white/10 table-fixed mt-6">
                <TableHeader className="border-b border-white/10">
                    <TableRow className="hover:bg-inherit border border-white/10">
                        <TableHead className="border-r border-white/10 text-center">S.NO</TableHead>
                        <TableHead className="border-r border-white/10 text-center">Level</TableHead>
                        <TableHead className="text-center">Points to be Achieved </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {levels.map((entry, idx) => (
                        <TableRow key={idx} className="hover:bg-inherit border border-white/10">
                            <TableCell className="font-medium border-r border-white/10 text-center">{idx + 1}</TableCell>
                            <TableCell className="border-r border-white/10 text-center">{entry.level}</TableCell>
                            <TableCell className="text-center">
                                <div className="flex items-center justify-center space-x-3">
                                    <span>
                                        <img src={points} alt="points" width={30} height={30} />
                                    </span>
                                    <span>{entry.points}</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
