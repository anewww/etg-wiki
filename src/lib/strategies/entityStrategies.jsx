import GunStrategy from "@/src/lib/strategies/gunStrategy"
import ItemStrategy from "@/src/lib/strategies/itemStrategy"

export const strategies = {
  guns: (gun) => GunStrategy(gun),
  items: (item) => ItemStrategy(item),
}
