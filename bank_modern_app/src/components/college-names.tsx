"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
    useGetCollegeOptionsLazyQuery,
    GetCollegeOptionsQuery,
} from "./operations.generated";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function CollegeName({
    watch,
    setValue,
}: {
    watch: any;
    setValue: any;
}) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");

    const value = watch("collegeName");

    const [getCollegeOptions, { data }] = useGetCollegeOptionsLazyQuery();

    React.useEffect(() => {
        if (search.length <= 2 || search === "") return;
        setTimeout(() => {
            getCollegeOptions({
                variables: {
                    name: `%${search}%`,
                },
            });
        }, 500);
    }, [search]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between text-ellipsis overflow-hidden  rounded-2xl border border-gray-300 w-full"
                >
                    {value ? value.toUpperCase() : "Select College..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full max-w-full min-w-[360px] lg:min-w-[450px] p-0 z-50 bg-white">
                <Command>
                    <CommandInput
                        value={search}
                        onValueChange={(value: string) => setSearch(value)}
                        placeholder="Search College..."
                    />
                    <CommandEmpty>No College found.</CommandEmpty>
                    <div className="max-h-[300px] bg-white z-50 overflow-y-scroll">
                        <CommandGroup>
                            {data?.college_options?.map(
                                (
                                    college: GetCollegeOptionsQuery["college_options"][number]
                                ) => {
                                    const collegeName =
                                        college.aicte_college_name !== ""
                                            ? college.aicte_college_name
                                            : college.faculty_college;

                                    return (
                                        <CommandItem
                                            key={college.id}
                                            value={collegeName}
                                            onSelect={(
                                                currentValue: string
                                            ) => {
                                                setValue(
                                                    "collegeName",
                                                    collegeName?.toLowerCase() ===
                                                        value?.toLowerCase()
                                                        ? ""
                                                        : currentValue
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value?.toLowerCase() ===
                                                        collegeName?.toLowerCase()
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {collegeName?.toUpperCase()}
                                        </CommandItem>
                                    );
                                }
                            )}
                        </CommandGroup>
                    </div>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
