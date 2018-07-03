import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Heading2 } from '../../styledComponents/typography';
import { Button } from '../../styledComponents/theme';

const Container = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionText = styled.span`
  flex: 10;
`;

const OptionResult = styled.div`
  padding-left: 10px;
  margin-left: 10px;
  flex: 1;
  font-weight: bold;
  height: 100%;
  text-align: center;
`;

// We could have split this component into two: OptionButton for when the user
// has yet to vote and OptionSelection for when the user has voted to clean
// up this component. I did it this way to show the versatility of styled-
// components.
const Option = styled(
  ({
    hasVoted,
    // destructure these next two props so that react
    // doesn't complain about unsupported html tag attributes
    // https://reactjs.org/warnings/unknown-prop.html
    selected,
    optionIsSelected,
    ...props
  }) => (hasVoted ? <div {...props} /> : <button {...props} />),
)`
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  margin: 20px 0;
  background-color: white;
  border: none;
  padding: 10px 20px;
  box-shadow: 0 10px 20px
    ${({ selected }) =>
      selected ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)'};
  transition: transform 150ms linear, box-shadow 150ms linear,
    color 150ms linear;
  cursor: ${({ hasVoted }) => (hasVoted ? 'default' : 'pointer')};
  color: ${({ selected, optionIsSelected }) =>
    selected
      ? 'rgba(0, 0, 0, 0.8)'
      : optionIsSelected ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.6)'};
  ${({ hasVoted }) =>
    hasVoted
      ? css`
          &:hover,
          &:focus {
            color: rgba(0, 0, 0, 0.8);
          }
        `
      : css`
          &:hover,
          &:focus {
            transform: ${({ selected }) =>
              selected ? 'translateY(0)' : 'translateY(-3px)'};
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            color: rgba(0, 0, 0, 0.8);
          }
        `};
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  min-height: 36px;
`;

const Poll = ({
  loading,
  options,
  title,
  selection,
  hasVoted,
  onSelectOption,
  onVote,
}) => {
  let optionsArray = Object.values(options);
  const renderOptions = !loading && optionsArray.length > 0;
  const renderVoteButton = renderOptions && !hasVoted;
  const voteIsDisabled = loading || !selection;
  const totalVotes = optionsArray.reduce((aggr, curr) => aggr + curr.votes, 0);

  if (hasVoted) {
    optionsArray = optionsArray.sort((a, b) => b.votes - a.votes);
  }

  return (
    <Container>
      <Heading2>{loading || !title ? 'loading...' : title}</Heading2>
      <div>
        {renderOptions &&
          optionsArray.map(option => {
            const id = option.optionId;
            const selected = id === selection;
            const perc = (option.votes / totalVotes * 100).toFixed(2) || 0;

            return (
              <Option
                key={id}
                selected={selected}
                hasVoted={hasVoted}
                optionIsSelected={!!selection}
                onClick={() => !hasVoted && onSelectOption(id)}>
                <OptionText>{option.text}</OptionText>
                {hasVoted &&
                  !isNaN(perc) && <OptionResult>{perc}%</OptionResult>}
              </Option>
            );
          })}
      </div>
      <ButtonContainer>
        {renderVoteButton && (
          <Button disabled={voteIsDisabled} onClick={!voteIsDisabled && onVote}>
            Vote
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

Poll.propTypes = {
  loading: PropTypes.bool.isRequired,
  options: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
  hasVoted: PropTypes.bool.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default Poll;