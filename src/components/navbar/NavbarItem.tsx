import { useState } from 'react';
import { NavbarItems } from '../navbarItems';
import SeeMoreButton from './SeeMoreButton';

type Props = {
  title: string;
  id: number;
  hasChildren: boolean;
  itemChildren: NavbarItems;
};

export default function NavbarItem({
  title,
  id,
  hasChildren,
  itemChildren
}: Props) {
  const [isCollapse, setIsCollapse] = useState(true);

  function renderTopicOptions(topicChildren: NavbarItems) {
    return (
      <ul className="topic__options">
        {topicChildren.map(({ title }) => (
          <li className="topic topic-option" key={`sm-${title}`}>
            {title}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <li className="navbar__item" key={`layer1-${id}`}>
      <div className="topic">
        <h3 className="topic__title">{title}</h3>

        {hasChildren && (
          <SeeMoreButton
            isCollapse={isCollapse}
            setIsCollapse={setIsCollapse}
          />
        )}
      </div>

      {hasChildren && !isCollapse && renderTopicOptions(itemChildren)}
    </li>
  );
}
