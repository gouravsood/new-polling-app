import React from 'react';
import Link from 'gatsby-link';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';

const IndexPage = () => (
  <div>
    <Heading2>A next-generation polling application</Heading2>
    <p>
      Built from the ground up - Ut pariatur velit eu fugiat ut. Veniam commodo
      non esse proident ut anim irure voluptate commodo aliqua tempor Lorem
      excepteur cupidatat. Nulla commodo ex laboris eu sit nisi exercitation
      dolore labore qui elit non Lorem minim. Voluptate pariatur anim esse irure
      ipsum ut pariatur. Mollit occaecat velit occaecat sint pariatur tempor.
      Consectetur culpa tempor dolore amet officia dolore nulla nisi sunt ea.
    </p>
    <Link to="/new">
      <Button>New Poll</Button>
    </Link>
  </div>
);

export default IndexPage;
