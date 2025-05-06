import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "Cardiologists",
  "Hospital Administrator",
  "Medical Lab Technician",
  "Nurse",
  "ENT"
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="max-w-4xl mx-auto my-20">
        {/* Negative margin to remove gap on first/last */}
        <CarouselContent className="-mx-2">
          {category.map((cat, index) => (
            <CarouselItem key={index} className="basis-auto px-2">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full text-sm"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;