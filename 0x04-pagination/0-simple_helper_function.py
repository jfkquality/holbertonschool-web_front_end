#!/usr/bin/env python3
""" Pagination function
"""


def index_range(page: int, page_size: int):
    """Return 2 member tuple of start, end index
    """

    res = ((page - 1) * page_size, page * page_size)
    return res
