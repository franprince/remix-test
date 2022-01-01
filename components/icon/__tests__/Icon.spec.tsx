import { render, screen } from "@testing-library/react"
import Icon from "../Icon"

describe('Icon component', () => {
    it('Should render github icon', () => {
        render(<Icon name="github" url="https://" variable="light" />)
        const githubIcon = screen.getByTitle(/githhub/i)
        expect(githubIcon).toBeInTheDocument()
    })
    it('Should render linkedin icon', () => {
        render(<Icon name="linkedin" url="https://" variable="light" />)
        const linkedinIcon = screen.getByTitle(/linkedin/i)
        expect(linkedinIcon).toBeInTheDocument()
    })
    it('Should render twitter icon', () => {
        render(<Icon name="twitter" url="https://" />)
        const twitterIcon = screen.getByTitle(/twitter/i)
        expect(twitterIcon).toBeInTheDocument()
    })
})
