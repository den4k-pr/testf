import { stack } from '../../../utils/stacks';
import skills from './Skills.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface SkillsTranslation {
  skillsTitle: string;
  skillsSpan: string;
}

export const Skills = ({ skillsTitle, skillsSpan }: SkillsTranslation) => {
  return (
    <section id="skills" className={skills.skills}>
      <div className="container">
        <h2 className="title">
          {skillsTitle} <span style={{ display: 'initial' }}>{skillsSpan}</span>
        </h2>
        <ul className={skills.skills__list}>
          {stack.map((el) => (
            <li key={el.img}>
              <Link href={el.link}>
                <Image src={el.img} width={35} height={35} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
