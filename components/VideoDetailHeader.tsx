"use client"
import { daysAgo } from "@/lib/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const VideoDetailHeader = ({ title, createdAt, userImg, username, videoId, ownerId, visibility, thumbnailUrl, id }: VideoDetailHeaderProps) => {
    const [copied, setCopied] = useState(false)
    const router = useRouter()

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/video/${id}`)

        setCopied(true)
    }

    useEffect(() => {
        const changeChecked = setTimeout(() => {
            if (copied) setCopied(false)
        }, 2000)

        return () => clearTimeout(changeChecked)
    }, [copied])

  return (
    <header className="detail-header">
      <aside className="user-info">
        <h1>{title}</h1>
        <figure>
            <button onClick={() => router.push(`/profile/${ownerId}`)}>
                <Image src={userImg || ""} width={24} height={24} alt="User" className="rounded-full" />
                {username ?? "Guest"}
            </button>
            <figcaption>
                <span className="mt-1">•</span>
                <p>{daysAgo(createdAt)}</p>
            </figcaption>
        </figure>
      </aside>
      <aside className="cta">
        <button onClick={handleCopyLink}>
            <Image src={copied ? "/assets/icons/checked.svg" : "/assets/icons/link.svg"} width={24} height={24} alt="copy link" />
        </button>
      </aside>
    </header>
  )
}

export default VideoDetailHeader
