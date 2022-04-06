import { VFC } from 'react'
import { Icon } from '../Icon'
import * as styles from './styles'

export interface CardSelectProps {
  value: string
  items: CardSelectItem[]
  onChange: (value: string) => void
}

export interface CardSelectItem {
  value: string
  icon: Icon
  label: string
}

export const CardSelect: VFC<CardSelectProps> = (props) => {
  return (
    <div css={styles.root}>
      {
        props.items.map(item => {
          const Icon = item.icon
          const selected = item.value === props.value
          return (
            <div
              key={item.value}
              css={styles.item}
            >
              <div
                css={[styles.itemIcon, selected && styles.itemIconSelected]}
                onClick={!selected ? () => props.onChange(item.value) : undefined}
                >
                <Icon color={'currentColor'} />
              </div>
              <div css={styles.itemLabel}>
                {item.label}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
