import React from 'react'
import './sectionSubtitle.Module.scss'

export default function SectionSubtitle({
  children,
}: {
  children?: React.ReactNode
}) {
  return <label className="section__subtitle">{children}</label>
}
