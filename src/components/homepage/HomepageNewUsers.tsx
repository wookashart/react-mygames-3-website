import React from 'react';

// Helpers
import { colors, animation } from '../../styles/variables';
import { HPLatestUsers } from '../../content/types/homepage';

// Components
import Wrapper from '../common/Wrapper';
import Link from 'next/link';

interface HomepageNewUsersProps {
  data: HPLatestUsers[];
}

const HomepageNewUsers = ({ data }: HomepageNewUsersProps) => (
  <>
    <div className="latest-users-wrapper">
      <Wrapper>
        <>
          <div className="latest-users-title">
            <h3>Ostatnio dołączyli</h3>
          </div>
          <ul className="latest-users-list">
            {data.map(item => (
              <li key={item.user_id}>
                <Link href={`/user/${item.user_id}`}>
                  <a title={item.user_login}>
                    <img
                      src={
                        item.user_avatar && item.user_avatar !== ''
                          ? item.user_avatar
                          : item.user_gender === 'M'
                          ? '/images/img/no-avatar-male.png'
                          : '/images/img/no-avatar-female.png'
                      }
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      </Wrapper>
    </div>
    <style jsx>{`
      .latest-users-wrapper {
        background-color: ${colors.ui.light};
        padding: 15px 0;
      }

      .latest-users-title {
        margin-bottom: 10px;
        position: relative;
        text-align: center;
      }

      .latest-users-title h3 {
        margin: 0;
        color: ${colors.text.default};
        display: inline-block;
        background-color: ${colors.ui.light};
        padding: 0 15px;
        position: relative;
        z-index: 1;
      }

      .latest-users-title::after {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 2px;
        bottom: 0;
        margin: auto;
        height: 1px;
        background-color: ${colors.text.default};
      }

      .latest-users-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
      }

      .latest-users-list > li {
        margin: 5px;
      }

      .latest-users-list img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: ${animation.fast}ms transform ease-out;
      }

      .latest-users-list img:hover {
        transform: scale(1.1);
      }
    `}</style>
  </>
);

export default HomepageNewUsers;
