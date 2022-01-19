import { Input, InputProps } from '@components/input/input';
import { Tooltip } from '@components/tooltip/tooltip';
import { ArtistSearchResultList } from '@screens/home/components/artist-search-result-list';
import { BaseButton } from '@components/base-button/base-button';
import React, { ChangeEvent, ForwardedRef, forwardRef, MouseEvent, useCallback, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useSearchArtistByName } from '@screens/home/hooks/use-search-artist-by-name';
import { SelectedArtistData, useGetArtistAlbums } from '@screens/home/hooks/use-get-artist-albums';

interface AutoCompleteInputProps extends InputProps {
  selectedArtistName: string;
}
const AutoCompleteInput = forwardRef((props: AutoCompleteInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { selectedArtistName, onChange, ...rest } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      className='w-full text-xl font-semibold'
      value={selectedArtistName || inputValue}
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

export function AutoComplete() {
  // Local State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<SelectedArtistData>({});

  //Hooks
  const inputRef = useRef<HTMLInputElement>(); //hint: if we want to apply album search based on query value

  // API Hooks
  const [{ hookData: artistList = [], isLoading }, getArtistList] = useSearchArtistByName();
  const [_, getArtistAlbums] = useGetArtistAlbums();

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

    if (!artistId) return;

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
        getArtistAlbums(selectedArtist);
      }}
    >
      <div className='w-1/2 min-w-60 relative'>
        <AutoCompleteInput
          onChange={(e) => {
            setSelectedArtist({});
            debouncedInputChange(e);
          }}
          onClick={() => {
            if (!artistList.length || isLoading) return;
            handleOpenDropDown();
          }}
          selectedArtistName={selectedArtist['name']}
          ref={inputRef}
        />
        <Tooltip open={isOpen} className='mt-md w-full text-textLight font-medium z-10'>
          <div className='flex justify-between items-center'>
            <p>Search results</p>
            <span className='font-bold text-lg cursor-pointer' onClick={handleCloseDropDown}>
              X
            </span>
          </div>

          <ArtistSearchResultList
            isLoading={isLoading}
            artists={artistList}
            onClose={handleCloseDropDown}
            onClick={handleSelectArtist}
          />
        </Tooltip>
      </div>

      <BaseButton className='bg-primary ml-lg' type='submit' disabled={!selectedArtist.id}>
        Search
      </BaseButton>
    </form>
  );
}
