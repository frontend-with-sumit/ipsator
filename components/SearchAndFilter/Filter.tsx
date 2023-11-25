import React from "react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "../ui/select";
import { Option } from "./Filters";

interface Props {
	items: Option[];
	name: string;
	value: string;
	icon: React.ReactNode;
	onChange: (value: string) => void;
}

const Filter = ({ items, name, value, icon, onChange }: Props) => {
	return (
		<div className="flex-start bg-gray-200 w-fit rounded-full py-2 px-5">
			<Select value={value} onValueChange={onChange}>
				{icon}
				<SelectTrigger className="min-w-[180px] focus:ring-0 focus:ring-offset-0 active: outline-none">
					<SelectValue placeholder={name} className="text-left" />
				</SelectTrigger>
				<SelectContent className="bg-white py-2 mt-3">
					{items.map((item) => (
						<SelectItem
							value={item?.id}
							key={item?.id}
							className="py-3 cursor-pointer hover:bg-slate-200"
						>
							{item?.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default Filter;
