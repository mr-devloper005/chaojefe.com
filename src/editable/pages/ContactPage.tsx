'use client'

import { Bookmark, FolderSearch, Mail, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Bookmark, title: 'SBM resource submissions', body: 'Suggest social bookmarking sites, niche boards, and link collections that deserve a place in the library.' },
    { icon: FolderSearch, title: 'Category and quality updates', body: 'Send corrections, better descriptions, broken-link reports, or category improvements for existing bookmarks.' },
    { icon: Sparkles, title: 'Partnership and curation support', body: 'Coordinate curated lists, bulk resources, and submission-focused campaigns with a clear SBM workflow.' },
  ]

  return (
    <EditableSiteShell className="bg-[var(--editable-page-bg,#f5f7fb)] text-[var(--editable-page-text,#1e2433)]">
      <main className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#667085]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-2xl border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#667085]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--editable-border)] bg-white p-7 shadow-sm">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e9edff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#4458e6]"><Mail className="h-4 w-4" /> SBM inquiry</div>
            <h2 className="text-2xl font-semibold">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
