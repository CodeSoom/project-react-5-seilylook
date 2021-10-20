import { render, fireEvent } from '@testing-library/react';

import CommentForm from './CommentForm';

describe('CommentForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderCommentForm() {
    return render((
      <CommentForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders comment write fields', () => {
    const { queryByLabelText } = renderCommentForm();

    expect(queryByLabelText('댓글')).not.toBeNull();
  });

  it('listens change comment event', () => {
    const { getByLabelText } = renderCommentForm();

    const controls = [
      {
        label: '댓글',
        name: 'text',
        value: '첫 댓글',
      },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders send button', () => {
    const { getByText } = renderCommentForm();

    fireEvent.click(getByText('댓글 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
