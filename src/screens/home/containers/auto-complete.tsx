import { Input, InputProps } from '@components/input/input';
import { Tooltip } from '@components/tooltip/tooltip';
import { ArtistSearchResultList } from '@screens/home/components/artist-search-result-list';
import { BaseButton } from '@components/base-button/base-button';
import React, { ChangeEvent, ForwardedRef, forwardRef, MouseEvent, useCallback, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useSearchArtistByName } from '@screens/home/hooks/use-search-artist-by-name';

interface AutoCompleteInputProps extends InputProps {
  absoluteValue: string;
}
const AutoCompleteInput = forwardRef((props: AutoCompleteInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { absoluteValue, onChange, ...rest } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      className='w-full text-xl font-semibold'
      value={absoluteValue || inputValue}
      onChange={(e) => {
        onChange(e);
        setInputValue(e.target.value);
      }}
      {...rest}
      ref={ref}
    />
  );
});
AutoCompleteInput.displayName = 'AutoCompleteInput';

type SelectedArtistData = { id?: string; name?: string };
export function AutoComplete() {
  // Local State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<SelectedArtistData>({});

  //Hooks
  const inputRef = useRef<HTMLInputElement>(); //hint: if we want to apply album search based on query value

  // API Hooks
  const [{ hookData: artistList = [] }, getArtistList] = useSearchArtistByName();

  // handlers

  const handleCloseDropDown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenDropDown = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    if (keyword.length < 2) {
      handleCloseDropDown();
      return;
    }

    handleOpenDropDown();
    getArtistList({ keyword });
  };

  const debouncedInputChange = useCallback(debounce(handleInputChange, 300), []);

  const handleSelectArtist = (e: MouseEvent<HTMLUListElement>) => {
    const targetElement = e.target as HTMLInputElement;
    const artistName = targetElement.getAttribute('data-name');
    const artistId = targetElement.getAttribute('data-id');

    setSelectedArtist({ name: artistName, id: artistId });
    inputRef.current.focus();
    handleCloseDropDown();
  };

  return (
    <form
      className='flex justify-center w-full'
      onSubmit={(e) => {
        e.preventDefault();
        if (!selectedArtist.id) return;
        console.log('submit', selectedArtist);
      }}
    >
      <div className='w-1/2 min-w-60 relative'>
        <AutoCompleteInput
          onChange={(e) => {
            setSelectedArtist({});
            debouncedInputChange(e);
          }}
          onFocus={handleOpenDropDown}
          absoluteValue={selectedArtist['name']}
          ref={inputRef}
        />
        <Tooltip open={isOpen && !!artistList.length} className='mt-md w-full text-textLight font-medium'>
          <div className='flex justify-between items-center'>
            <p>Search results</p>
            <span className='font-bold text-lg cursor-pointer' onClick={handleCloseDropDown}>
              X
            </span>
          </div>

          <ArtistSearchResultList artists={artistList} onClose={handleCloseDropDown} onClick={handleSelectArtist} />
        </Tooltip>
      </div>

      <BaseButton className='bg-primary ml-lg' type='submit' disabled={!selectedArtist.id}>
        Search
      </BaseButton>
    </form>
  );
}
