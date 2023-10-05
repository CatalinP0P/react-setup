import React from 'react'
import './sectionTitle.Module.scss'

export default function SectionTitle({
  children,
}: {
  children?: React.ReactNode
}) {
  return <label className="section__title">{children}</label>
}
