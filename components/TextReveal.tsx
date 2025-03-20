'use client'
import GradientText from '@/app/(home)/components/GradientText'
import { cn } from '@/lib/utils'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { FC, ReactNode, useRef } from 'react'

interface TextRevealProps {
    children: ReactNode
    className?: string
    specialWords?: string[]
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, specialWords = [] }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const text = typeof children === 'string' ? children : ''
    const paragraphs = text.split('\n').filter(p => p.trim() !== '')

    return (
        <div ref={containerRef} className={cn('relative w-full text-center', className)}>
            <div className="sticky top-0 max-w-full">
                {paragraphs.map((paragraph, pIndex) => (
                    <ParagraphReveal
                        key={pIndex}
                        paragraph={paragraph}
                        progress={scrollYProgress}
                        index={pIndex}
                        total={paragraphs.length}
                        specialWords={specialWords}
                        className={className}
                    />
                ))}
            </div>
        </div>
    )
}

interface ParagraphRevealProps {
    paragraph: string
    progress: MotionValue<number>
    index: number
    total: number
    specialWords?: string[]
    className?: string
}

const ParagraphReveal: FC<ParagraphRevealProps> = ({
    paragraph,
    progress,
    specialWords = [],
    className,
}) => {
    const paragraphProgress = useTransform(progress, [0.3, 0.5], [0, 1])
    const words = paragraph.split(' ')

    return (
        <div className={cn('relative mb-6 leading-relaxed', className)}>
            {/* Base faded layer */}
            <div className="absolute inset-0 text-white/10">
                {words.map((word, i) => (
                    <span key={i} className="inline-block mx-1">{word}{' '}</span>
                ))}
            </div>

            {/* Revealing animation */}
            <div className="relative text-2xl md:text-5xl text-white">
                {words.map((word, i) => {
                    const wordStart = i / words.length
                    const wordEnd = (i + 1) / words.length

                    return (
                        <RevealWord
                            key={i}
                            {...{ progress: paragraphProgress, range: [wordStart, wordEnd] }}
                            isSpecialWord={specialWords.includes(word.replace(/[.,!?]/g, '').toLowerCase())}
                            className={className}
                        >
                            {word}
                        </RevealWord>
                    )
                })}
            </div>
        </div>
    )
}

interface RevealWordProps {
    children: string
    progress: MotionValue<number>
    range: [number, number]
    isSpecialWord: boolean
    className?: string
}

const RevealWord: FC<RevealWordProps> = ({
    children,
    progress,
    range,
    isSpecialWord,
    className,
}) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <motion.span
            style={{ opacity }}
            className={cn('inline-block mx-1 transition-opacity', className)}
        >
            {isSpecialWord ? (
                <GradientText className='font-light'>{children}</GradientText>
            ) : (
                <span>{children}{' '}</span>
            )}
        </motion.span>
    )
}

export default TextReveal
