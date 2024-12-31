import { Trophy } from 'lucide-react'
import couponbg from "@/assets/couponbg/couponbg.png"
import banner from "@/assets/trophies/banner.png"
export function TitlesComponent() {
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
                    <span className="">Titles</span>
                </div>
                <div className="cursor-pointer z-50">
                    {/* <CreateAchievementDialog onCreateAchievement={addAchievement} /> */}
                </div>
            </div>
        </div>
    )
}