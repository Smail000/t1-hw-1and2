import type { Filter } from "@/entities/filter/model";
import { createContext } from "react";

export const FilterContext = createContext<[ Filter, React.Dispatch<React.SetStateAction<Filter>> ]>([{}, () => {}]);
