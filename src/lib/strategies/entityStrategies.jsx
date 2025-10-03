'use client'

import GunStrategy from "@/src/lib/strategies/gunStrategy"
import ItemStrategy from "@/src/lib/strategies/itemStrategy"
import { useContext, useMemo } from "react";
import { GunsContext } from "@/src/contexts/gunsContext";
import { ItemsContext } from "@/src/contexts/itemsContext";

export const strategies = {
  guns: (data) => ({
    render: (gun) => GunStrategy(gun),
    data: data,
    type: data.type,
  }),
  items: (data) => ({
    render: (item) => ItemStrategy(item),
    data: data,
    type: data.type,
  }),
}

export function useStrategies() {
  const guns = useContext(GunsContext);
  const items = useContext(ItemsContext);
  
  return useMemo(() => ({
    guns: strategies.guns(guns),
    items: strategies.items(items),
  }), [guns, items]); 
}
