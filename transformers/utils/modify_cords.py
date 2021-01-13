from typing import Callable, Union


def modify(elem: Union[dict, None], x: list, y: list, func: Callable):
    if elem:
        args = {'x': x, 'y': y}
        args.update(elem)
        x, y = func(args)