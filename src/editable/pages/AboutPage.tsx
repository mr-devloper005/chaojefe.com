import { Bookmark, FolderSearch, Link2, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f5f7fb)] px-4 py-14 text-[var(--editable-page-text,#1e2433)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-2xl border border-[var(--editable-border)] bg-white/85 p-8 shadow-sm lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-55">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-black tracking-[-0.07em]">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { Icon: Bookmark, label: 'Saved links' },
                { Icon: FolderSearch, label: 'Curated categories' },
                { Icon: Link2, label: 'Source context' },
              ].map(({ Icon, label }) => (
                <div key={label} className="rounded-xl border border-[var(--editable-border)] bg-[#f7f9fc] p-4 text-sm font-black">
                  <Icon className="h-5 w-5 text-[#4458e6]" />
                  <p className="mt-3">{label}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-[var(--editable-border)] bg-white/80 p-6 shadow-sm">
                <Sparkles className="h-5 w-5 text-[#4458e6]" />
                <h2 className="text-xl font-black tracking-[-0.04em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
