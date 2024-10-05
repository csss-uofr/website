import React from 'react'
import { Link } from 'react-router-dom'

const CodeOfConduct = () => {
  return (
    <div className="container mx-auto py-8 h-max-c lg:max-w-screen-lg">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-1 mb-2 pb-4 border-b border-gray-200">Code of conduct</h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">Our Pledge</h1>
        <p className="mb-4">
          We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

          We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">Our Standards
        </h1>
        <p className="mt-4 mb-2">
          Examples of behavior that contributes to a positive environment for our community include:
        </p>
        <div>

          <li>Demonstrating empathy and kindness toward other people</li>
          <li>
            Being respectful of differing opinions, viewpoints, and experiences
          </li>
          <li>
            Giving and gracefully accepting constructive feedback
          </li>
          <li>
            Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
          </li>
          <li>
            Focusing on what is best not just for us as individuals, but for the overall community
          </li>
        </div>
        <p className="mt-4 mb-2">
          Examples of unacceptable behavior include:
        </p>
        <div>
          <li>
            The use of sexualized language or imagery, and sexual attention or advances of any kind
          </li>
          <li>
            Trolling, insulting or derogatory comments, and personal or political attacks
          </li>
          <li>
            Public or private harassment
          </li>
          <li>
            Publishing others' private information, such as a physical or email address, without their explicit permission
          </li>
          <li>
            Other conduct which could reasonably be considered inappropriate in a professional setting
          </li>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">
          Enforcement Responsibilities
        </h1>
        <p className="mb-4">
          Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

          Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

          Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at <Link to="mailto:csss.uofr@gmail.com" className='text-green-600 hover:underline'>csss.uofr@gmail.com</Link>. All complaints will be reviewed and investigated promptly and fairly.

          All community leaders are obligated to respect the privacy and security of the reporter of any incident.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">
          Scope
        </h1>
        <p className="mb-4">
          This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">
          Attribution
        </h1>
        <p className="mb-4">
          This Code of Conduct is adapted from the <Link to="https://www.contributor-covenant.org/" className='text-green-600 hover:underline'>Contributor Covenant</Link>, version 2.0, available at <Link to="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" className='text-green-600 hover:underline'>https://www.contributor-covenant.org/version/2/0/code_of_conduct.html </Link>.
        </p>
        <p className="mb-4">
          Community Impact Guidelines were inspired by <Link to="https://github.com/mozilla/diversity" className='text-green-600 hover:underline'>Mozilla's code of conduct enforcement ladder</Link>.
        </p>
        <p className="mb-4">
          For answers to common questions about this code of conduct, see the FAQ at <Link to="https://www.contributor-covenant.org/faq" className='text-green-600 hover:underline'>https://www.contributor-covenant.org/faq</Link>. Translations are available at <Link to="https://www.contributor-covenant.org/translations" className='text-green-600 hover:underline'>https://www.contributor-covenant.org/translations</Link>.
        </p>
      </div>
    </div>
  )
}

export default CodeOfConduct