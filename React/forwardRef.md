# forwardRef

**React에서 forwardRef를 사용하는 이유는, ref를 자식 컴포넌트로 전달할 때 그 ref가 정확히 전달되도록 보장하고, 컴포넌트 간의 구조를 숨기면서 ref 전달을 허용하기 위함입니다.**


## customRef vs forwardRef  

* 커스텀 ref를 사용한 경우:

부모 컴포넌트에서 ref를 생성하고 이를 자식 컴포넌트에 전달할 때, 자식 컴포넌트에서는 ref를 props로 받습니다.
이때 ref.current는 자식 컴포넌트가 생성되고 렌더링된 이후에 해당 요소를 가리킵니다. 즉, 렌더링이 완료된 후에 ref.current를 사용할 수 있습니다.


* forwardRef를 사용한 경우:

forwardRef를 사용하면 자식 컴포넌트에서 ref를 직접 받을 수 있습니다.
forwardRef를 사용하면 자식 컴포넌트의 render 함수가 호출되기 전에 ref 객체가 생성되고 연결됩니다. 따라서 ref.current는 렌더링이 완료되기 전에도 요소를 가리킬 수 있습니다.

<br/>

커스텀 ref props를 사용한 경우에는 렌더링이 완료된 후에 ref.current를 확인해야 하므로 초기에는 null일 수 있습니다. 
forwardRef를 사용하는 경우에는 렌더링 이전에 ref.current를 확인할 수 있기 때문에 정상적으로 동작할 수 있습니다.



### 예시

```React
const DetailSectionComponent = forwardRef<HTMLDivElement>((_, ref) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const {
    detailPage,
    topImageUrls,
    bottomImageUrls,
    useTopBottomImagesInDetailPage,
  } = useProductStore().processingProduct;

  const collapseStyle = useMemo(
    () => css`
      ${collapsed ? 'height: fit-content' : 'max-height: 75rem'};
      overflow: hidden;
      transition: 0.2s ease;
    `,
    [collapsed],
  );

  const collapseArrowStyle = useMemo(
    () => css`
      ${collapsed ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'};
      transition: 0.2s ease;
    `,
    [collapsed],
  );

  const handleToggleCollapse = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const detailPagePreview = useMemo(() => {
    const parser = new DOMParser();
    const body = parser.parseFromString(detailPage, 'text/html')?.body;

    if (!body) {
      return detailPage;
    }

    const topImageUrl = topImageUrls[0] || '';
    const bottomImageUrl = bottomImageUrls[0] || '';

    return useTopBottomImagesInDetailPage
      ? getPresubfixDetailPage(body, topImageUrl, bottomImageUrl)
      : getDetailPageWithoutPreSubfix(body, topImageUrl, bottomImageUrl);
  }, [
    bottomImageUrls,
    detailPage,
    topImageUrls,
    useTopBottomImagesInDetailPage,
  ]);

  return (
    <Wrapper ref={ref}>
      <div
        css={collapseStyle}
        dangerouslySetInnerHTML={{ __html: detailPagePreview ?? '' }}
      />
      <CollapseButton onClick={handleToggleCollapse}>
        상세정보 {collapsed ? '접기' : '펼쳐보기'}
        <span css={collapseArrowStyle}>
          <Collapse />
        </span>
      </CollapseButton>
    </Wrapper>
  );
});

DetailSectionComponent.displayName = 'DetailSection';
export const DetailSection = memo(DetailSectionComponent);

```



# Reference

https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes

