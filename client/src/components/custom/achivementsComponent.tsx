import React, { useState } from "react"
import { Trophy } from 'lucide-react'
import banner from "@/assets/trophies/banner.png"
import trophy from "@/assets/trophies/trophy.png"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Achievement {
    id: number;
    title: string;
    description: string;
    image: string;
}

export function AchievementsComponent() {
    const [achievements, setAchievements] = useState<Achievement[]>([
        { id: 1, title: "Post Buster", description: "Upload 500+ Posts", image: trophy },
        { id: 2, title: "Engagement Master", description: "Like 1000+ Posts", image: trophy },
        { id: 3, title: "Super Commenter", description: "Comment 500+ Times", image: trophy },
        { id: 4, title: "Top Influencer", description: "Reach 5000+ Followers", image: trophy },
    ]);

    const addAchievement = (newAchievement: Achievement) => {
        setAchievements([...achievements, newAchievement]);
    };

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
                    <span className="">Achievements</span>
                </div>
                <div className="cursor-pointer z-50">
                    <CreateAchievementDialog onCreateAchievement={addAchievement} />
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
                {achievements.map((achievement) => (
                    <AchievementCard
                        key={achievement.id}
                        title={achievement.title}
                        description={achievement.description}
                        image={achievement.image}
                    />
                ))}
            </div>
        </div>
    );
}

interface AchievementCardProps {
    title: string;
    description: string;
    image: string;
}

export function AchievementCard({ title, description, image }: AchievementCardProps) {
    return (
        <div className="w-full h-64 p-4 border border-white/20 rounded-2xl bg-[#101010]">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center flex flex-col items-center justify-center">
                    <img src={image} alt="trophy" width={150} />
                    <div className="text-xl font-semibold mb-2">{title}</div>
                    <div className="text-sm text-white/80">{description}</div>
                </div>
            </div>
        </div>
    );
}

interface CreateAchievementDialogProps {
    onCreateAchievement: (achievement: Achievement) => void;
}

export function CreateAchievementDialog({ onCreateAchievement }: CreateAchievementDialogProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && description && image) {
            const newAchievement: Achievement = {
                id: Date.now(),
                title,
                description,
                image: URL.createObjectURL(image),
            };
            onCreateAchievement(newAchievement);
            setTitle("");
            setDescription("");
            setImage(null);
            setOpen(false);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="border border-white/10">Create Achievement</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#101010] border-white/10">
                <DialogHeader>
                    <DialogTitle className="text-white">Create Achievement</DialogTitle>
                    <DialogDescription className="text-white">
                        Create a new achievement by filling out the form below.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4 text-white">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="col-span-3 bg-[#101010] border-white/10"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="col-span-3 bg-transparent border-white/10"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="image" className="text-right">
                                Image
                            </Label>
                            <div className="col-span-3">
                                <Input
                                    id="image"
                                    type="file"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    className="bg-transparent border-white/10"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button className="bg-[#101010] text-white border border-white/10">Create Achievement</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}