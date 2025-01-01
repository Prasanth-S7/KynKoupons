import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trophy } from 'lucide-react';
import couponbg from "@/assets/couponbg/couponbg.png";

export function CouponsComponent() {
  return (
    <div className="text-white px-5">
      <div className="h-24 rounded-2xl px-6 flex justify-between border border-white/20 items-center relative overflow-hidden">
        <div className="flex space-x-3 items-center h-full">
          <img
            src={couponbg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <span><Trophy /></span>
          <span>Coupons</span>
        </div>
        <div className="cursor-pointer z-50">
          <CouponDialog />
        </div>
      </div>
    </div>
  );
}

export function CouponDialog() {
  const [couponData, setCouponData] = useState({
    name: '',
    totalCoupons: '',
    partnerInfo: '',
    couponType: '',
    offerType: '',
    offerValue: '',
    criteriaType: '',
    criteriaValue: '',
  });

  const couponTypes = ['Internal', 'External'];
  const offerTypes = ['Percentage %', 'Rupees'];
  const criteriaTypes = ['Points', 'Amount', 'Transactions'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCouponData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setCouponData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3205/coupons/addCoupon", couponData)
    console.log(res.status);
    console.log('Coupon data submitted:', couponData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border border-white/10">Create Coupon</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-[#101010] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>Create a Coupon</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new coupon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Coupon Name
            </Label>
            <Input
              id="name"
              name="name"
              value={couponData.name}
              onChange={handleInputChange}
              className="col-span-3 bg-inherit border-white/10"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="totalCoupons" className="text-right">
              Total Coupons
            </Label>
            <Input
              id="totalCoupons"
              name="totalCoupons"
              value={couponData.totalCoupons}
              onChange={handleInputChange}
              className="col-span-3 bg-inherit border-white/10"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="partnerInfo" className="text-right">
              Partner Info
            </Label>
            <Input
              id="partnerInfo"
              name="partnerInfo"
              value={couponData.partnerInfo}
              onChange={handleInputChange}
              className="col-span-3 bg-inherit border-white/10"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="couponType" className="text-right">
              Coupon Type
            </Label>
            <Select
              name="couponType"
              value={couponData.couponType}
              onValueChange={(value) => handleSelectChange('couponType', value)}
            >
              <SelectTrigger className="col-span-3 bg-inherit border border-white/10 text-white">
                <SelectValue placeholder="Select coupon type" />
              </SelectTrigger>
              <SelectContent className='dark'>
                {couponTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="offerType" className="text-right">
              Offer Type
            </Label>
            <Select
              name="offerType"
              value={couponData.offerType}
              onValueChange={(value) => handleSelectChange('offerType', value)}
            >
              <SelectTrigger className="col-span-3 bg-inherit border-white/10">
                <SelectValue placeholder="Select offer type" />
              </SelectTrigger>
              <SelectContent className='dark'>
                {offerTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="offerValue" className="text-right">
              Offer Value
            </Label>
            <Input
              id="offerValue"
              name="offerValue"
              type='number'
              value={couponData.offerValue}
              onChange={handleInputChange}
              className="col-span-3 bg-inherit border-white/10"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="criteriaType" className="text-right">
              Criteria Type
            </Label>
            <Select
              name="criteriaType"
              value={couponData.criteriaType}
              onValueChange={(value) => handleSelectChange('criteriaType', value)}
            >
              <SelectTrigger className="col-span-3 bg-inherit border-white/10">
                <SelectValue placeholder="Select criteria type" />
              </SelectTrigger>
              <SelectContent className='dark'>
                {criteriaTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="criteriaValue" className="text-right">
              Criteria Value
            </Label>
            <Input
              id="criteriaValue"
              name="criteriaValue"
              value={couponData.criteriaValue}
              onChange={handleInputChange}
              className="col-span-3 bg-inherit border-white/10"
            />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Create Coupon</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

