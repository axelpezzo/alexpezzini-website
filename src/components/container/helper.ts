export const getContainerSize = (size: string) => {
  switch (size) {
    case 'xl':
      return 'max-w-[1340px]'
    case 'lg':
      return 'max-w-[1200px]'
    case 'md':
      return 'max-w-[890px]'
    case 'sm':
      return 'max-w-[640px]'
    case 'full':
      return 'w-full'
  }
}

export const getContainerPadding = (size: string) => {
  switch (size) {
    case 'full':
      return 'px-0'
    default:
      return 'px-3'
  }
}
